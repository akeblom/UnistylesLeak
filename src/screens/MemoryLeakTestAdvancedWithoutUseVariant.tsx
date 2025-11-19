import { Badge } from '@styles/passepartout/componentsWithoutUseVariant/Badge';
import { Box } from '@styles/passepartout/componentsWithoutUseVariant/Box';
import { Button } from '@styles/passepartout/componentsWithoutUseVariant/Button';
import { Text } from '@styles/passepartout/componentsWithoutUseVariant/Text';
import { Toggle } from '@styles/passepartout/componentsWithoutUseVariant/Toggle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ITEM_COUNT = 100; // Adjust for stress testing

export const MemoryLeakTestAdvancedWithoutUseVariant: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [autoRefreshInterval, setAutoRefreshInterval] = useState(3000);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleRefresh = useCallback(() => {
    setRefreshCount(prev => prev + 1);
    loadPhotos();
  }, []);

  const handleClear = () => {
    setPhotos([]);
    setRefreshCount(0);
  };

  useEffect(() => {
    if (autoRefresh) {
      intervalRef.current = setInterval(() => {
        handleRefresh();
      }, autoRefreshInterval);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, autoRefreshInterval, handleRefresh]);

  const renderItem = ({ item, index }: { item: Photo; index: number }) => {
    const useVariant = index % 4;

    return (
      <Box
        key={item.id}
        background={
          useVariant === 0
            ? 'brand'
            : useVariant === 1
            ? 'secondary'
            : useVariant === 2
            ? 'tertiary'
            : 'primary'
        }
        padding="lg"
        cornerCut={index % 2 === 0 ? 'md' : 'lg'}
        style={styles.itemContainer}
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

            <View style={styles.checkboxRow}>
              <Toggle value={index % 2 === 0} onValueChange={() => {}} />
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <Button
            appearance={useVariant === 0 ? 'primary' : 'hero'}
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
          Leak test Without useVariant
        </Text>
        <Text
          font="body"
          size="sm"
          color="secondary"
          align="center"
          style={styles.subtitle}
        >
          Testing Unistyles with {ITEM_COUNT} items & auto-refresh
        </Text>

        <View style={styles.statsRow}>
          <Badge type="information" shape="square">
            <Badge.Text>Loaded: {photos.length}</Badge.Text>
          </Badge>
          <Badge type="attention" shape="square">
            <Badge.Text>Refreshes: {refreshCount}</Badge.Text>
          </Badge>
          <Badge
            type={autoRefresh ? 'success' : 'interactivePrimary'}
            shape="square"
          >
            <Badge.Text>Auto: {autoRefresh ? 'ON' : 'OFF'}</Badge.Text>
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

      <View style={styles.autoRefreshControls}>
        <View style={styles.toggleRow}>
          <Text font="bodySemiBold" size="md">
            Auto Refresh (Stress Test)
          </Text>
          <Toggle value={autoRefresh} onValueChange={setAutoRefresh} />
        </View>

        <View style={styles.intervalButtons}>
          <Button
            appearance={autoRefreshInterval === 1000 ? 'primary' : 'secondary'}
            size="small"
            title="1s"
            onPress={() => setAutoRefreshInterval(1000)}
            compact
            style={styles.intervalButton}
          />
          <Button
            appearance={autoRefreshInterval === 3000 ? 'primary' : 'secondary'}
            size="small"
            title="3s"
            onPress={() => setAutoRefreshInterval(3000)}
            compact
            style={styles.intervalButton}
          />
          <Button
            appearance={autoRefreshInterval === 5000 ? 'primary' : 'secondary'}
            size="small"
            title="5s"
            onPress={() => setAutoRefreshInterval(5000)}
            compact
            style={styles.intervalButton}
          />
          <Button
            appearance={autoRefreshInterval === 10000 ? 'primary' : 'secondary'}
            size="small"
            title="10s"
            onPress={() => setAutoRefreshInterval(10000)}
            compact
            style={styles.intervalButton}
          />
        </View>
      </View>

      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        removeClippedSubviews={false}
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
  autoRefreshControls: {
    paddingHorizontal: theme.spacings.lg,
    paddingBottom: theme.spacings.md,
    gap: theme.spacings.sm,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  intervalButtons: {
    flexDirection: 'row',
    gap: theme.spacings.sm,
  },
  intervalButton: {
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
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacings.sm,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: theme.spacings.sm,
  },
  button: {
    flex: 1,
  },
}));
