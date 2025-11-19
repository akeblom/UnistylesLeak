import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Badge } from '@styles/passepartout/components/Badge';
import { Box } from '@styles/passepartout/components/Box';
import { Button } from '@styles/passepartout/components/Button';
import { Text } from '@styles/passepartout/components/Text';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ITEM_COUNT = 100; // Adjust this to test with different amounts of data

export const MemoryLeakTest: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${ITEM_COUNT}`,
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to load photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  const handleRefresh = () => {
    setRefreshCount(prev => prev + 1);
    loadPhotos();
  };

  const handleClear = () => {
    setPhotos([]);
    setRefreshCount(0);
  };

  const renderItem = ({ item, index }: { item: Photo; index: number }) => {
    return (
      <Box
        key={item.id}
        background="brand"
        padding="lg"
        cornerCut="md"
        style={styles.itemContainer}
        dynamicBackground={index % 2 === 0 ? undefined : '#f0f0f0'}
      >
        <View style={styles.itemContent}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />

          <View style={styles.textContent}>
            <View style={styles.headerRow}>
              <Text
                font="bodySemiBold"
                size="md"
                color="primary"
                numberOfLines={2}
                style={styles.title}
              >
                {item.title}
              </Text>
            </View>

            <Text font="body" size="sm" color="secondary" numberOfLines={1}>
              Photo ID: {item.id}
            </Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <Button
            appearance="primary"
            size="small"
            title="View"
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log('View photo', item.id);
            }}
            style={styles.button}
          />
          <Button
            appearance="secondary"
            size="small"
            title="Share"
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log('Share photo', item.id);
            }}
            style={styles.button}
          />
          <Button
            appearance="text"
            size="small"
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log('More options', item.id);
            }}
            style={styles.button}
          >
            <Button.Text>...</Button.Text>
          </Button>
        </View>
      </Box>
    );
  };

  return (
    <View style={styles.container}>
      <Box background="brand" padding="lg" style={styles.header}>
        <Text font="bodyBold" size="xl" color="primary" align="center">
          Memory Leak Test
        </Text>
        <Text
          font="body"
          size="sm"
          color="secondary"
          align="center"
          style={styles.subtitle}
        >
          Testing Unistyles with {ITEM_COUNT} items
        </Text>

        <View style={styles.statsRow}>
          <Badge type="information" shape="square">
            <Badge.Text>Loaded: {photos.length}</Badge.Text>
          </Badge>
          <Badge type="attention" shape="square">
            <Badge.Text>Refreshes: {refreshCount}</Badge.Text>
          </Badge>
        </View>
      </Box>

      <View style={styles.controls}>
        <Button
          appearance="hero"
          size="medium"
          title={loading ? 'Loading...' : 'Refresh Data'}
          onPress={handleRefresh}
          disabled={loading}
          style={styles.controlButton}
        >
          {loading && <Button.Spinner />}
        </Button>
        <Button
          appearance="secondary"
          size="medium"
          title="Clear All"
          onPress={handleClear}
          disabled={photos.length === 0}
          style={styles.controlButton}
        />
      </View>

      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        removeClippedSubviews={false} // Disable to ensure all items use unistyles
      />
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  header: {
    marginBottom: theme.spacings.md,
  },
  subtitle: {
    marginTop: theme.spacings.sm,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacings.md,
    marginTop: theme.spacings.md,
  },
  controls: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacings.lg,
    paddingBottom: theme.spacings.md,
    gap: theme.spacings.md,
  },
  controlButton: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: theme.spacings.lg,
    paddingBottom: theme.spacings.xl,
  },
  itemContainer: {
    marginBottom: theme.spacings.md,
  },
  itemContent: {
    flexDirection: 'row',
    marginBottom: theme.spacings.md,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadiuses.sm,
    marginRight: theme.spacings.md,
  },
  textContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacings.sm,
  },
  title: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: theme.spacings.sm,
  },
  button: {
    flex: 1,
  },
}));
